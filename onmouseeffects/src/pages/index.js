import Head from 'next/head'
import OnClickMouse from '../../src/pages/components/OnClickMouse/OnClickMouse'
import OnMouseLeave from './components/OnMouseLeave/OnMouseLeave'
export default function Home() {
  return (
    <>
      <OnClickMouse />
      <OnMouseLeave />
    </>
  )
}
