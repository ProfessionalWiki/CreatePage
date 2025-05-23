-include .env
export

# setup for docker-compose-ci build directory
# delete "build" directory to update docker-compose-ci

ifeq (,$(wildcard ./build/))
    $(shell git submodule update --init --remote)
endif


EXTENSION=CreatePage

# docker images
MW_VERSION?=1.39
PHP_VERSION?=8.1
DB_TYPE?=mysql
DB_IMAGE?="mysql:8"

# extensions
SMW_VERSION?=4.2.0

# composer
# Enables "composer update" inside of extension
COMPOSER_EXT?=true

# Enables node.js related tests and "npm install"
# NODE_JS?=true


include build/Makefile

