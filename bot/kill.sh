#!/bin/sh

killall bash
killall npm

fuser -k 3000/tcp

killall bash
killall npm
