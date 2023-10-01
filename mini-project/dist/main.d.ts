interface IUser {
    id: number;
    name: string;
}
declare const getUsers: () => Promise<IUser[]>;
declare const getUser: (id: any) => Promise<any>;
declare const main: () => Promise<void>;
declare const likedPostsList: any;
declare const wrapper: HTMLElement;
declare const likedPostsBtn: HTMLElement;
declare const renderLikedPosts: (posts: [object]) => Promise<void>;
