export const app_name = '142.93.13.217';

export function buildPath(route:string) : string
{
    if (process.env.NODE_ENV != 'development')
    {
        return 'https://' + app_name + route;
    }
    else
    {
        return 'http://localhost:5000' + route;
    }
}
