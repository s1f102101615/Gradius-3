import type { UserId } from '$/commonTypesWithClient/branded';
import type { PlayerModel } from '$/commonTypesWithClient/models';
export type Methods = {
  get: {
    resBody: PlayerModel | null;
  };
  post: {
    reqBody: {
      userid: UserId;
      username: string;
    };
    resBody: PlayerModel;
  };
};
