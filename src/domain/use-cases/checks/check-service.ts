

interface CheckServiceUseCase {
    execute( url: string):Promise<boolean>;
}

type SuccessCallback = () => void;//si todo esta bien seria true
type ErrorCallback = (error: string) => void;


//tenemos un caso de uso que es CheckService, que revisa cualquier url que tenga ok como respuesta.
export class CheckService implements CheckServiceUseCase {

constructor(
    private readonly successCallback: SuccessCallback,
    private readonly errorCallback: ErrorCallback
){}

    public async execute(url: string): Promise<boolean> {
        try{
            const req = await fetch(url);
            if( !req.ok){
                throw new Error(`Error on check service ${url}`);
            }
            console.log(`calling this.successCallback`)
            this.successCallback();
            return true;
        }catch(err){
            console.log(`${err}`);
            this.errorCallback(`${err}`);
            return false;
        }

    }
}