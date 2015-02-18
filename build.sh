#!/bin/bash

grunt clean:dist
grunt copy:scripts
grunt bower:install
grunt typescript:main
grunt uglify:dev
