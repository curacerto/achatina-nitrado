import { ServiceDetailsEntity } from './service-details.entity';

export class ServiceEntity {
  id: number;
  location_id: number;
  status: string;
  websocket_token: string;
  user_id: number;
  comment: string;
  auto_extension: boolean;
  auto_extension_duration: number;
  auto_extension_external: boolean;
  type: string;
  type_human: string;
  managedroot_id: number;
  details: ServiceDetailsEntity;
  start_date: string;
  suspend_date: string;
  delete_date: string;
  suspending_in: number;
  deleting_in: number;
  username: string;
  owner_user_id: number;
  owner_username: string;
  roles: string[];
  is_xcross: boolean;
}
