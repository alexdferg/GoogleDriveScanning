This is a solution for any organizations that use workflow scanning (such as in a Xerox Machine).

1) Install google-drive-ftp-adapter

https://github.com/andresoviedo/google-drive-ftp-adapter

2) Run the following Google Apps Script from the account the adapter points to. In order for people to move files, ownership of a file has to be updated to the intended owner.
	The Script will:
		1) Grab pdfs in from a given folder, change owner to specific email account
		2) Start a trigger to run every minute
