/**
 * Created by runinspring@gmail.com on 2014/6/10.
 */
module jftools{
    export class JFObject{
        public static createBMP(_tex:egret.Texture=null,_name:String=null):egret.Bitmap{
            var _bmp = new egret.Bitmap();
            if(_tex!=null){
                _bmp.texture = _tex;
            }else{
                var _tex:egret.Texture = RES.getRes(_name);
            }
            return _bmp;
        }
    }
}

