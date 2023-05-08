#!/bin/bash
args="$@"
npx tsc && node --experimental-specifier-resolution=node build/cli/src/app.js $args


# run chmod +x ./script.sh when you get 'Permission Denied' error