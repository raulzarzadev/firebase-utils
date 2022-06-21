import { FirebaseConfig } from '../models/firebaseConfig.model';

export interface CreateFirebaseDTO extends Pick<FirebaseConfig, 'projectName'> {}
