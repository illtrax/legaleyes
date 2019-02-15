import os
import time
import re
import requests
from slackclient import SlackClient

# instantiate Slack client
slack_client = SlackClient(os.environ.get('SLACK_BOT_TOKEN'))

# runtime variables
botId = None
serverIp = "localhost"

# commands
GET_COMMAND = "get server"
START_COMMAND = "start server"
KILL_COMMAND = "kill server"
REBOOT_COMMAND = "reboot server"

# constants
RTM_READ_DELAY = 1 # 1 sesconds delay between reading from RTM
MENTION_REGEX = "^<@(|[WU].+?)>(.*)"
HOME_CHANNEL = "general"
ADMIN_NAME = "reid.christopher.404"

def parse_bot_commands(slack_events):
    for event in slack_events:
        if event["type"] == "message" and not "subtype" in event:
            user_id, message = parse_direct_mention(event["text"])
            if user_id == botId:
                return message, event["channel"], event["user"]
    return None, None, None

def parse_direct_mention(message_text):
    matches = re.search(MENTION_REGEX, message_text)
    # the first group contains the username, second contains the message
    return (matches.group(1), matches.group(2).strip()) if matches else (None, None)

def get_ngrok_url():
    time.sleep(1)
    ngrok = requests.get('http://localhost:4040/api/tunnels').json()
    tunnel_url = ngrok['tunnels'][1]['public_url'] #Do the parsing of the get
    return tunnel_url

def get_params(command):
    commands = command.split()
    params = ""
    for index, param in enumerate(commands, start=0):   # default is zero
        if index > 1:
            params += param +" "
    return params

def handle_command(command, channel, user):
    # Default response is help text for user
    default_response = "Not sure what you mean."

    # Finds and excutes the given command, filling in respose
    response = None
    url = None
    # This is where you start to implement more commands!
    if command.startswith(GET_COMMAND):
        url = get_ngrok_url()
        if url == None:
            response = "Server is not currently hosted"
        else:
            response = "Server is hosted at " + url
    elif command.startswith(START_COMMAND):
        slack_client.api_call(
            "chat.postMessage",
            channel=channel,
            text="Starting Server...",
            icon_emoji=':robot_face:'
        )
        params = get_params(command)
        os.system("bash -c 'sh start.sh " + params + "'")
        url = get_ngrok_url()
        response = "Server Successfully Started. " + url
    elif command.startswith(REBOOT_COMMAND):
        slack_client.api_call(
            "chat.postMessage",
            channel=channel,
            text="Rebooting Server...",
            icon_emoji=':robot_face:'
        )
        params = get_params(command)
        os.system("bash -c 'sh reboot.sh " + params + "'")
        url = get_ngrok_url()
        response = "Server Successfully Rebooted. " + url
    elif command.startswith(KILL_COMMAND):
        slack_client.api_call(
            "chat.postMessage",
            channel=channel,
            text="Killing Server...",
            icon_emoji=':robot_face:'
        )
        os.system("bash -c 'sh kill.sh'")
        response = "Server Successfully Killed."
    slack_client.api_call(
        "chat.postMessage",
        channel=channel,
        text=response or default_response,
        icon_emoji=':robot_face:'
    )
    if url != None and channel != homeId:
        slack_client.api_call(
            "chat.postMessage",
            channel=homeId,
            text="Server is hosted at " + url,
            icon_emoji=':robot_face:'
        )

def fetch_home_channel(name):
    channels_call = slack_client.api_call("channels.list")
    if channels_call.get('ok'):
        # return channels_call['channels']
        channels = channels_call["channels"]
        for c in channels:
            if c["name"] == name:
                return c["id"]
    return None

if __name__ == "__main__":
    print("Attempting to connect KnalysisBot")
    if slack_client.rtm_connect(with_team_state=False):
        # Fetch the matching Ids for Home Channel
        homeId = fetch_home_channel(HOME_CHANNEL)
        # Read bot's user ID by calling Web API method `auth.test`
        botId = slack_client.api_call("auth.test")["user_id"]
        print("KnalysisBot connected and running!")
        try:
            while True:
                command, channel, user = parse_bot_commands(slack_client.rtm_read())
                if command:
                    handle_command(command, channel, user)
                time.sleep(RTM_READ_DELAY)
        except Exception, e:
            slack_client.api_call(
                "chat.postMessage",
                channel=homeId,
                text="\nCrashing..." + str(e),
                icon_emoji=':robot_face:'
            )
    else:
        print("Connection failed. Exception traceback printed above.")
