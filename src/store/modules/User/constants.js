const networkList = process.env.REACT_APP_ALLOWED_NETWORKS && process.env.REACT_APP_ALLOWED_NETWORKS.split(',');
export const ALLOWED_NETWORKS = networkList && networkList.length ? networkList : ['0x1'];

export const FAKE_NOTIFICATION_LIST = [
    {
        picture: '',
        title: 'Title Lorem Ipsum',
        text: '@fuadasa2 has followed you'
    },
    {
        picture: '',
        title: 'Title Lorem Ipsum',
        text: '@fuadasa2 has followed you'
    },
    {
        picture: '',
        title: 'Title Lorem Ipsum',
        text: '@fuadasa2 has followed you'
    }
]