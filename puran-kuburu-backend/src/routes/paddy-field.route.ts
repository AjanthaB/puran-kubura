import * as PaddyFieldsController from '../controllers/paddy-field.controller';

export const paddyFieldRoutes = (app: any) => {
  // users routes
  app.route('/api/v1/paddy-fields')
    .get(PaddyFieldsController.getPaddyFields)
    .post(PaddyFieldsController.createPaddyField);
}
