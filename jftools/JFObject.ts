/**
 * Created by runinspring@gmail.com on 2014/6/10.
 */
module egret{
    export class JFObject{
        public static createBMP(_tex:egret.Texture=null,_name:string=null):egret.Bitmap{
            var _bmp = new egret.Bitmap();
            if(_tex!=null){
                _bmp.texture = _tex;
            }else{
                var _tex2:egret.Texture = RES.getRes(_name);
                _bmp.texture = _tex2;
            }
            return _bmp;
        }
    }
}

