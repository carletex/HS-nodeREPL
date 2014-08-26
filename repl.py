#!/usr/bin/env python

import urllib2
import json
import sys
from hs_oauth import get_access_token, request

def process_cmd(cmd):
	if cmd == 'exit()':
		sys.exit()
	response = request(access_token, HS_BASE_URL + cmd)
	return json.dumps(response, indent=4)

HS_BASE_URL = 'https://www.hackerschool.com/api/v1'
access_token, refresh_token = get_access_token()

print 'HS OAauth: access token received'
print 'Listening to commands. Type \'help\' for a list of commands'

while True:
	cmd = raw_input('HS> ')
	print process_cmd(cmd)