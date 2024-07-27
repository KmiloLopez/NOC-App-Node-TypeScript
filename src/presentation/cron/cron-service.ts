import { CronJob } from "cron";

type CronTime = string | Date;
type OnTick = () => void;

export class CronService{

 //static createJob(CronTimerr:CronTime , OnTickrr:OnTick): {
    static createJob(CronTimerr:CronTime , OnTickrr:OnTick): CronJob{
        const job = new CronJob(
            CronTimerr,
            OnTickrr,
           
        );
        job.start();
        return job;
    }
}
