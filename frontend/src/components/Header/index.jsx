import React, { useRef, useEffect, useContext } from 'react'
import { Container } from './styled'
import { IoLogoNpm } from 'react-icons/io'
import {LandingContext} from '../../contexts/LandingContext'


export default function Header() {
  const context = useContext(LandingContext)
  const { search, setSearch } = context

  const ref = useRef()

  useEffect(() => {
    ref.current.focus()
  })
  return (
    <Container>
      <nav>
        <ol>
          <li>❤ Neglected Pizza Money</li>
        </ol>
        <ol>
          <li>Products</li>
          <li>Pricing</li>
          <li>Documentation</li>
          <li>Community</li>
        </ol>
      </nav>
      <section>
        <i>
          <IoLogoNpm size={80} />
        </i>
        <div>
          <button type="button">Sign Up</button>
          <button type="button">Sign In</button>
        </div>
        <form>
          <input type="text" ref={ref} onChange={e => setSearch(e.target.value)} value={search} name="search" id="search" placeholder="Search packages" />
          <button type="button">
          <strong>Search</strong>
        </button>
      </form>
      </section>
    </Container>
  )
}
