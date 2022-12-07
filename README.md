<!-- ## Whatsapp Clone with next js 

# Live link
[Whastapp]([https://pip.pypa.io/en/stable/](https://whatsapp-clone-chi-drab.vercel.app/)) -->


<!-- markdownlint-configure-file {
  "MD013": {
    "code_blocks": false,
    "tables": false
  },
  "MD033": false,
  "MD041": false
} -->

<div align="center">

# Whatsapp Clone 


Whatsapp Clone  is made with **Next js and Redux Toolkit**, and typescript.

This is one of my favourites project , a chat app with "Socket.io,WebRTC" 
with power of next SSR and redux toolkit.<br />
MIT project feel free to downlaod and contribute.
  
[LIVE URL](https://whatsapp-clone-chi-drab.vercel.app/) •
[Getting started](#getting-started) •
[Installation](#installation) •
[Configuration](#configuration) •
[Environment](#Environment)

</div>

## Once you open the Live link then
<img width="1440" alt="Screenshot 2022-12-07 at 2 22 26 PM" src="https://user-images.githubusercontent.com/35723915/206132703-fdedd191-a648-4209-9026-4907c368aa57.png">

## Getting started

[LIVE URL](https://whatsapp-clone-chi-drab.vercel.app/)

> First Whatsapp clone with Video call (One-2-one) and chat with WEBRTC and socket.io , no firebase uses.




Read more about the matching algorithm [here][algorithm-matching].

## Installation




#### Step 1: [`github`](https://github.com/narendram224/whatsapp-clone_nextjs)

```bash
$ git clone https://github.com/narendram224/whatsapp-clone_nextjs
```

### *Step 2: Go to the project folder*

```bash
$ cd whatsapp-clone_nextjs
```

### *Step 3: To run locally make a file in root foler name as ".env.staging"*

### *Step 4: Put the following data inside .env.staging file*
```sh
NEXT_PUBLIC_BASE_URL     ="http://localhost:3001/api||your backend base URL" 
GOOGLE_CLIENT_ID         = your google client ID
GOOGLE_CLIENT_SECRET     = "Your google client secret"
NEXT_AUTH_URL            = https://localhost:3000||"your frontend local server" 
NEXT_PUBLIC_API_VERSION  = v1
JWT_SECRET               =your JWT secret key
```
### *Step 5: After installing and env setup run this*
> Note Make sure you should install all the packages and env setup according to data.
I am using pnpm in this project but you can choose and build command yarn/ npm <br/>
Just simply run this command to start server
```bash
$ pnpm dev || yarn dev || npm dev
```
### *Step 5: For building*
#### Staging
```bash
$ pnpm staging
```
#### Production
```bash
$ pnpm build
```

<details>
<summary>Library’s </summary>

To install zoxide, run this command in your terminal:

```sh
curl -sS https://raw.githubusercontent.com/ajeetdsouza/zoxide/main/install.sh | bash
```

Or, you can use a package manager:

| Packages        | version              | Why we use                                                                                   |
| ------------------- | ----------------------- | ---------------------------------------------------------------------------------------------- |
| ***Next js***           | 12        | `Core next js`                                                                |
| *React*               | 17.0.2           | `Core react`                                                          |
| *React Dom*               | 17.0.2            | `Core react library`                                                                          |
| @reduxjs/toolkit  | 1.6.1 | `toolkit for state management `                                                                               |
| axios          | ^0.21.4  | `api fetching library`                                                                             |
| env-cmd           | ^10.1.0                  | `run .env file in local`                                      |
| next-auth          | [^4.16.4      | `Auth for goggle and other`                                                                           |
| next-redux-wrapper        | ^8.0.0       | `wraper for next js and redux`                                                                           |
| next-useragent          | ^2.8.0      | `SSR checker device info`                                                                           |
| node-sass              | ^8.0.0          | `helper library for simple-peer` |
| react-feather             |  ^2.0.9                       | `icon library for react`                                                                             |
| react-hot-toast       | ^2.4.0               | `toaster library`                                                                   |
| react-redux | ^8.0.5     | `middleware library between react and redux`                                                                        |
| redux           |  4.1.1                       | `core library for redux`                                                                           |
| sass        | ^1.42.1     | `Compiler to sccs`                                                                           |
| simple-peer     | ^9.11.1           | `Library to connect WEB RTC in client  `                                                            |
| socket.io-client      | ^4.5.4      | `Library to connect socket in client`                                                                           |
| Void Linux          | [Void Linux Packages]   | `xbps-install -S zoxide`                                                                       |

</details>



</details>


## Configuration

### ENV
  - Insert into .env.staging file:
    | Hook     | Description                       |
    | -------- | --------------------------------- |
    | `NEXT_PUBLIC_BASE_URL`   | "http://localhost:3001/api||your backend base URL"                              |
    | `GOOGLE_CLIENT_ID` | your google client ID           |
    | `GOOGLE_CLIENT_SECRET`    | "Your google client secret" |
    | `NEXT_AUTH_URL`    | ["Your google client secret"](https://localhost:3000||"your frontend local server") |
     | `NEXT_PUBLIC_API_VERSION`    |v1 |
      | `JWT_SECRET`    | your JWT secret key |


## Environment

Simply Create ".env.staging file inside you project root"

- `Add these following code inside you created file`
 
  - make sure you will change accoring to you setup:
    | Hook     | Description                       |
    | -------- | --------------------------------- |
    | `NEXT_PUBLIC_BASE_URL`   | "http://localhost:3001/api||your backend base URL"                              |
    | `GOOGLE_CLIENT_ID` | your google client ID           |
    | `GOOGLE_CLIENT_SECRET`    | "Your google client secret" |
    | `NEXT_AUTH_URL`    | ["Your google client secret"](https://localhost:3000||"your frontend local server") |
     | `NEXT_PUBLIC_API_VERSION`    |v1 |
      | `JWT_SECRET`    | your JWT secret key |

#ScreenShot

## Once you open the Live link then
<img width="1440" alt="Screenshot 2022-12-07 at 2 22 26 PM" src="https://user-images.githubusercontent.com/35723915/206132703-fdedd191-a648-4209-9026-4907c368aa57.png">

## On mobile view Login with google is right now supports
<img width="690" alt="Screenshot 2022-12-07 at 2 22 40 PM" src="https://user-images.githubusercontent.com/35723915/206132768-aa0f8107-9e27-40b1-9ce4-683d260c04f6.png">

</br>

## After sucessfully login you will get the your profile picture along with two button one for chat and one for logout.
<img width="927" alt="Screenshot 2022-12-07 at 2 23 03 PM" src="https://user-images.githubusercontent.com/35723915/206132859-678b8c05-4ac7-4ecf-9bb2-8e731f093d5e.png">
</br>

## After Clicking on the chat button you will see the chat window look like this.
<img width="1440" alt="Screenshot 2022-12-07 at 2 12 55 PM" src="https://user-images.githubusercontent.com/35723915/206130437-e800a827-fc53-4d23-97ed-767e576e3d00.png">
</br>

## To Video call User must be online otherwise you will not see the video call button. Which is green in right side of chat heaer.
<img width="967" alt="Screenshot 2022-12-07 at 2 17 13 PM" src="https://user-images.githubusercontent.com/35723915/206131384-5dee9041-0952-4e46-b6d0-b7462b3c459f.png">
</br>

## Once you give the permission you will see the Video calling model open.
<img width="1438" alt="Screenshot 2022-12-07 at 2 14 51 PM" src="https://user-images.githubusercontent.com/35723915/206130834-a83c6632-8025-47a6-92b6-334cfee0bd88.png">
</br>

## You can simple call the user by clicking the call button.
<img width="1424" alt="Screenshot 2022-12-07 at 2 24 34 PM" src="https://user-images.githubusercontent.com/35723915/206133201-eb470f87-d59c-4eaa-b8f0-8192cbce31d6.png">
</br>


## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
