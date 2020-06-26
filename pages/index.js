import { useEffect } from 'react'
import Router from 'next/router'

export default () => {
  useEffect(() => {
    Router.replace('/login')
  }, []);

  return null;
}