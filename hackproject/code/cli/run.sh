#!/bin/bash
args="$@"

build="npx tsc"
$build

run_for_dir () {
    if [ -f "$1" ] && [[ "$1" == *.html ]]; then
        command="node --experimental-specifier-resolution=node build/app.js $args --html $1"
        echo $1
        $command
        echo -e "\n"
        return
    fi

    if [ -d "$1" ]; then
        for file in "$1"/*; do
            run_for_dir "$file"
        done
    fi
}

run_for_dir $args

# run chmod +x ./script.sh when you get 'Permission Denied' error