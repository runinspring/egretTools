/**
 * Created by 张宇 runinspring@gmail.com on 14-4-16.
 */
    /// <reference path="Mediator.ts"/>
    /// <reference path="Proxy.ts"/>
    /// <reference path="Command.ts"/>
 module mvc{
    export class Facade{
        public static instance:Facade = null;
        public instanceMediator:Object;
        public instanceProxy:Object;
        public instanceCommand:Object;
        constructor(){
            this.instanceMediator = new Object();
            this.instanceProxy = new Object();
            this.instanceCommand = new Object();
            this.initializeController();
        }
        public initializeController():void
        {//初始化command
            //console.info("初始化command");
        }
		public registerMediator(_target:Mediator):void
        {
            _target.facade = this;
            this.instanceMediator[_target.mediatorName] = _target;
            _target.onRegister();
        }
        public retrieveMediator(_name:string):Object
        {
            return this.instanceMediator[_name];
        }
        public registerProxy(_target:Proxy):void
        {
            _target.facade = this;
            this.instanceProxy[_target.proxyName] = _target;
            _target.onRegister();
        }
        public retrieveProxy(_name:string):Object
        {
            return this.instanceProxy[_name];
        }
        public registerCommand(_name:string,_command:Object):void
        {
            this.instanceCommand[_name] = _command;
        }
        public sendNotification(_name:string,_note:Object=null):void
        {
            //console.info("name:",_name);
            for(var i in this.instanceMediator){
                var _mediator = this.instanceMediator[i];
                var _len = _mediator.listNotificationInterests().length;
                //console.info("len:",_len,i);
                if(_len>0){
                    for(var j:number=0;j<_len;j++){
                        if(_mediator.listNotificationInterests()[j] == _name){
                            _mediator.handleNotification(_name,_note);
                            break;
                        }
                    }
                }
            }

            if(this.instanceCommand[_name]){
                //console.info(_name,this.instanceCommand[_name]);

                var commandClassRef = this.instanceCommand[_name];
                var commandInstance = new commandClassRef(this);
                //console.info("new",commandClassRef)
                commandInstance.excute(_note);
            }
        }
	}
}