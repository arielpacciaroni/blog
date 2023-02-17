import { MdxContent } from '@/src/components/MdxContent'
import { serialize } from 'next-mdx-remote/serialize'

const AboutMeContent = `
![Some text](https://images.unsplash.com/photo-1676211986358-8b57ad9a2df0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)

# Greetings!

I started programming back when I used to play SA:MP (a multiplayer game) and addons were built in Pawn (a language like C++).

Fast-forward to my journey in web development (back in 2014), frameworks such as Ember, Backbone, and jQuery were dominating the frontend scene. 
At the time, I disliked the MVC pattern for frontend so it was a no-no for me.

This disinterest led me to explore PHP, where I gained experience with server-side rendering and the creation of dynamic websites, 
although my coding skills weren't that great (imagine PHP without any framework, just rendering HTML with data from a DB). 
As my skills grew, I became interested in using JavaScript on the server-side, which led me to NodeJS. 
I started using templating engines such as Pug (back when it was known as Jade lol) and EJS to create interactive web pages.

At some point in 2016, I decided to test the cool kid Svelte and company, Sapper, which provide me a new way of building UIs that I like.

That was until a friend of mine introduced me to React, TypeScript and its ecosystem, which I loved it (even still to this day!). 
This experience quickly grew and I became what I am today!

While the details are fuzzy here, I learned Express, started to use popular databases like MySQL, Postgres, MongoDB. 
Also started doing testing with Jest, learned Docker & Kubernetes and more!

My most used stack includes Next, React, TypeScript & GraphQL in the frontend; Node, TypeScript in the backend and proper GitOps implementation (Git, Docker, Kubernetes, Terraform, Argo & family)

I love learning new technologies! Recently, I've been digging SSR, its capabilities, metaframeworks such as Astro or Fresh blow my mind. 
On the other hand, I keep an eye to CNCF projects. Lastly, I'm learning Rust, and soon, I want to learn service meshes like Istio.
`

export default async function AboutMe() {
  const source = await serialize(AboutMeContent)

  return (
    <>
      <div>
        <h1 className="text-white text-3xl">About Me</h1>
        <hr className="my-4 border border-gray-800" />
        <MdxContent source={source} />
      </div>
    </>
  )
}
