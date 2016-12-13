#!/bin/bash
rm questions.md
for dir in ./code/*; do
    cat "$dir/readme.md" >> questions.md
    echo -e "\n\n\n\n" >> questions.md
done

