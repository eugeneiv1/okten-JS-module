declare const getPost: (postId: number) => Promise<object>;
declare const getPostComments: (postId: number) => Promise<any>;
declare const showPostInfo: () => Promise<void>;
declare const renderPostInfo: (post: object, tag: any) => void;
declare const renderComments: (comments: [object], tag: any) => void;
declare const saveLikedPostInfo: (post: object) => void;
