#!/bin/sh

install="false"; pull="false"

for var in "$@"; do
    if [ "$var" = "-install" ]; then install="true"
    elif [ "$var" = "-pull" ]; then pull="true"
fi; done

$pull && bash -c "cd ../; git pull"
$install && bash -c "cd ../; npm i"

gnome-terminal --geometry 0 50 10 10 -e "bash -c 'cd ../; npm start; exec $SHELL'"
sleep 1
gnome-terminal --geometry 0 100 10 10 -e "bash -c 'cd ../../../; ./ngrok http 3000; exec $SHELL'"
