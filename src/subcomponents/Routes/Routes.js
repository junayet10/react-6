let Routes =[
    {
        path:'/',
        title:'Home'
    },
    {
        path:'/shop',
        title:'Shop'
    },
    {
        path:'/pages',
        title:'Pages'
    },
    
    {
        path:'/features',
        title:'Features',  // <--- added comma here
        subMenu:[
            {
                path:"/features/feature1",
                title:"Feature 1"
            },
            {
                path:"/features/feature2",
                title:"Feature 2"
            }
        ]
    },

    {
        path:'/blog',
        title:'Blog'
    },
    
    {
        path:'/contact',
        title:'Contact'
    },
    
    
    
];
export default Routes;