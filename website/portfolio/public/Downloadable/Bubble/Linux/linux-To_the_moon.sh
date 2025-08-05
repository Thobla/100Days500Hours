#!/bin/sh
echo -ne '\033c\033]0;To the moon and back\a'
base_path="$(dirname "$(realpath "$0")")"
"$base_path/linux-To_the_moon.x86_64" "$@"
