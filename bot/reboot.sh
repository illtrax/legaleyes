#!/bin/sh

install="false"; pull="false"

for var in "$@"; do
    if [ "$var" = "-install" ]; then install="true"
    elif [ "$var" = "-pull" ]; then pull="true"
fi; done

bash -c "sh kill.sh"

$pull && bash -c "cd ../; git pull"
$install && bash -c "cd ../; npm i"

bash -c "sh start.sh"
