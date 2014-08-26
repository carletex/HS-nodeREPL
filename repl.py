#!/usr/bin/env python

import sys
import os
from hs_oauth import get_access_token, request

# HS auth
HS_BASE_URL = 'https://www.hackerschool.com/api/v1'
access_token, refresh_token = get_access_token()

print 'HS OAauth: access token received'
print 'Listening to messages...'