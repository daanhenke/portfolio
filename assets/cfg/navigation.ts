export type NavigationConfiguration = NavigationItem[]

export type NavigationItem =
{
    name: string;
    to?: string;
    children?: NavigationItem[]
}

export const Items: NavigationConfiguration =
[
    { name: 'Home', to: '/' },
    { name: 'About', to: '/me' },
    { name: 'Links', to: '/links', children: [
        { name: 'GitHub', to: 'https://github.com/daanhenke' }
    ]}
]