import * as FarmerController from '../controllers/farmer.controler';

export const farmerRoute = (app: any) => {
  // users routes
  app.route('/api/v1/farmers')
    .get(FarmerController.getFarmers)
    .post(FarmerController.createFarmer)
    .put(FarmerController.updateFarmer);

  app.route('/api/v1/farmers/:id')
    .delete(FarmerController.deleteFarmer);
}
