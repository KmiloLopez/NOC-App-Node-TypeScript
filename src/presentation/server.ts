import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";




//con el metodo start es el punto de inicio de nuestra aplicacion. 
export class Server {
    public static start(){
        console.log("Server started...");
        
        CronService.createJob(
            '*/2 * * * * *',
            ()=>{

                new CheckService(
                    //depende el try and catch del execute en check-service
                    //si SuccessCallback => success
                    //si ErrorCallback => error
                    () => console.log('Success'),
                    (error) => console.log(error),
                ).execute('http://google.com');
                //.execute('http://localhost:3000/profile');
            }
        );
      
    }
}
