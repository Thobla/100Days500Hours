#!/bin/sh
echo -ne '\033c\033]0;Jorden Sindre\a'
base_path="$(dirname "$(realpath "$0")")"
"$base_path/Jorden Sindre.x86_64" "$@"
