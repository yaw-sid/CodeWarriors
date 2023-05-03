#!/bin/bash
args="$@"
npx tsc && node --experimental-specifier-resolution=node build/app.js $args


# run chmod +x ./script.sh when you get 'Permission Denied' error