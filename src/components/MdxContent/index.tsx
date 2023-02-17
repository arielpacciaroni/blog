'use client'

import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote'

const MdxComponents = {
  p: (props: React.HTMLProps<HTMLParagraphElement>) => (
    <p className="my-4">{props.children}</p>
  ),
  img: (props: React.HTMLProps<HTMLImageElement>) => (
    <div className="mx-16">
      <img
        className="rounded-t-lg shadow-lg w-full h-auto mx-auto"
        {...props}
      />
      <p className="bg-gray-800 rounded-b-lg text-center text-sm">
        {props.alt}
      </p>
    </div>
  ),
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1 className="text-2xl font-bold text-white tracking-wider">
      {props.children}
    </h1>
  ),
  Card: (props: React.HTMLProps<HTMLDivElement>) => (
    <div
      style={{
        background: '#333',
        borderRadius: '0.25rem',
        padding: '0.5rem 1rem',
      }}
      {...props}
    />
  ),
}

type MdxContentProps = {
  source: MDXRemoteSerializeResult
}

export function MdxContent({ source }: MdxContentProps) {
  return <MDXRemote {...source} components={MdxComponents} />
}
