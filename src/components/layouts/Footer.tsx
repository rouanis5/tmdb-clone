import React from 'react'
import Container from '@/components/layouts/Container'
import links from '@/data/links.json'
import config from '@/data/config.json'

export default function Footer() {
  return (
    <footer className="bg-primary py-16 text-white">
      <Container className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <FooterCard className="sm:col-span-2 lg:col-span-1">
          <>
            <a
              href={config.PUBLIC_PORTFOLIO}
              className="flex items-center gap-3"
            >
              <div className="w-16 h-16 bg-primary/60 rounded-xl flex justify-center items-center">
                {/* <SmileSolid className="w-9 fill-white" /> */}logo
              </div>
              <h4 className="capitalize leading-snug font-bold text-lg">
                {config.PUBLIC_NAME}
              </h4>
            </a>
            <p className=" text-base font-light leading-tight max-w-64">
              {config.PUBLIC_DESCRIPTION}
            </p>
          </>
        </FooterCard>
        <FooterCard>
          <div className="flex gap-x-8 h-full">
            {links.map((category, i) => (
              <div key={i} className="flex flex-col justify-between gap-y-6">
                <p className="capitalize leading-snug font-bold text-lg">
                  {category.name}
                </p>
                <ul className="inline-grid grid-flow-col grid-rows-5 gap-x-12 justify-start">
                  {category.links.map(({ href, name }, i) => (
                    <li key={i}>
                      <FooterLink href={href} name={name} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FooterCard>
        <FooterCard>
          <div className="flex gap-x-8 h-full">
            <div className="flex flex-col justify-between gap-y-6">
              <p className="capitalize leading-snug font-bold text-lg">
                follow
              </p>
              <ul className="inline-grid grid-flow-col grid-rows-5 gap-x-12 justify-start">
                <li>
                  <FooterLink
                    href={config.PUBLIC_LINKEDIN}
                    name="linkedin"
                    target="_blank"
                  />
                </li>
                <li>
                  <FooterLink
                    href={config.PUBLIC_GITHUB}
                    name="github"
                    target="_blank"
                  />
                </li>
                <li>
                  <FooterLink
                    href={config.PUBLIC_X}
                    name="X (twitter)"
                    target="_blank"
                  />
                </li>
                <li>
                  <FooterLink href="#" name="newsletter" />
                </li>
                <li>
                  <FooterLink href="#" name="RSS" target="_self" />
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-between">
              <p className="capitalize leading-snug font-bold text-lg">
                others
              </p>
              <ul className="inline-grid grid-flow-col grid-rows-5 gap-x-12 justify-start">
                <li>
                  <FooterLink
                    href={config.PUBLIC_GITHUB}
                    name="repository"
                    target="_blank"
                  />
                </li>
                <li>
                  <FooterLink href={config.PUBLIC_GITHUB} name="credits" />
                </li>
              </ul>
            </div>
          </div>
        </FooterCard>
      </Container>
      <Container className="text-white text-sm text-opacity-30 mt-4 -mb-4 px-6 flex justify-between">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
        <p>
          <a href="#" className="hover:underline">
            terms of use
          </a>{' '}
          |{' '}
          <a href="#" className="hover:underline">
            licence
          </a>
        </p>
      </Container>
    </footer>
  )
}

function FooterCard(props: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={
        'p-6 rounded-xl bg-neutral-100/5 flex flex-col justify-between gap-y-8 ' +
        props.className
      }
    >
      {props.children}
    </div>
  )
}

function FooterLink(props: { name?: string; href?: string; target?: string }) {
  return (
    <span className="space-x-3">
      <span className="inline-block">-</span>
      <a
        className="capitalize font-light hover:underline leading-snug hover:font-normal"
        href={props.href}
        target={props.target}
      >
        {props.name}
      </a>
    </span>
  )
}
