import * as type from './Type';

export const changeUser = user => ({
    type: type.changeUser,
    user: user
});
