import type { Models } from "appwrite";
import {get, writable} from 'svelte/store';
import {sdk, server} from './Appwrite';

const createState = () => {
    const {subscribe, set, update} = writable({
        account: null,
        alert: null,
    });

    return {
        subscribe,
        signup: async (email: string, password: string, name: string) => {
            return await sdk.account.create('unique()', email, password, name);
        },
        login: async (email: string, password: string) => {
            await sdk.account.createEmailSession(email, password);
            const user = await sdk.account.get();
            state.init(user);
        },
        getUser: async() => {
            try {
                const user = await sdk.account.get()
                state.init(user)
            } catch (error) {
                return set({account: null, alert: error})
            }     
        },
        logout: async () => {
            await sdk.account.deleteSessions()
            return set({account: null, alert: null})
        },
        init: async (account = null) => {
            return set({account, alert:null})
        }
    }
}

export const state = createState();
