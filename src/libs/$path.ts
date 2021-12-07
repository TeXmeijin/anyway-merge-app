/* eslint-disable */
// prettier-ignore
export const pagesPath = {
  contributors: {
    _slug: (slug: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/contributors/[slug]' as const, query: { slug }, hash: url?.hash })
    })
  },
  dashboard: {
    $url: (url?: { hash?: string }) => ({ pathname: '/dashboard' as const, hash: url?.hash })
  },
  sandbox: {
    spinner: {
      $url: (url?: { hash?: string }) => ({ pathname: '/sandbox/spinner' as const, hash: url?.hash })
    }
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

// prettier-ignore
export type PagesPath = typeof pagesPath
