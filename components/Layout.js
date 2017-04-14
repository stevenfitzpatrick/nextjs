import Head from 'next/head';

export default({children, title='This is the default title'}) => (
    <div>
        <head>
            <meta charset="utf-8"/>
            <meta http-equiv="x-ua-compatible" content="ie=edge, chrome=1"/>
            <title>{title}</title>
        </head>
    </div>
)