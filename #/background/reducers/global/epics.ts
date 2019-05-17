import { combineEpics } from 'redux-observable';
import { delay, filter, map } from 'rxjs/operators';
import { IEpic } from '..';
import actions from './actions';

const epics: IEpic[] = [
  action$ =>
    action$.pipe(
      filter(actions.ping.match),
      delay(4000),
      map(() => actions.pong()),
    ),
  action$ =>
    action$.pipe(
      filter(actions.pong.match),
      delay(4000),
      map(() => actions.ping()),
    ),
];

export default combineEpics(...epics);
