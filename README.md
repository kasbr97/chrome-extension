# Chrome Extension

A simple chrome extension that allows the user to write emails


# How to install and run the Chrome Extension

First the credentials must be added so it can send emails:
1. Go to the src folder and paste the SERVICE_ID, TEMPLATE_ID and USER_ID (given by email) inside the curly brackets of the Credentials jsx file.
2. Save the file.

After that:
1. Open the terminal and go to the directory of the Extension
2. run `npm install`, after that run `npm run dev`
3. webpack will create a `dist` directory inside extension directory (this will be used to upload it into Chrome)
4. Open the Chrome Browser and head to the Chrome Extensions `chrome://extensions/` 
5. Enable the Developer Mode at the top right of the screen, this will show three options bellow the navigation bar "Load Unpacked", "Pack Extension", and "Update". 
6. Select the option "Load Unpacked", this will open the File Explorer. 
7. In the File Explorer, got to the Chrome Extension directory and select the `dist` folder. The Chrome Extension will show ready to use.
8. Access the extension through the Chrome Browser

With this extension the user can send an email to @gmail, @hotmail, @outlook and @involve.ai addresses. 
