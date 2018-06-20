#!/bin/bash

npm run build
rm -rf /home/work/odp/webroot/hanghang/*
cp -r ./dist/* /home/work/odp/webroot/hanghang/
