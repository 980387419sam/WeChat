
const surname = ['赵','钱','孙','李','周','吴','郑','王','张','陈']
const names = ['一','二','三','四','五','六','七','八','九','十']

Page({
    data:{
        datas:[]
    },
    onLoad:function(){
        this.setData(
            {datas:this.getDatas(10)
        })
    },
    getDatas:function(n){
        const datas = this.data.datas
        for(let i=0;i<n;i++){
            const n = Math.random()+''
            const n1 = n[2]*1
            const n2 = n[3]*1
            datas.push({
                name: surname[n1]+names[n2]
            })
        }
        return datas
    },
    onReachBottom:function(){
        this.setData({datas:this.getDatas(10)})
    },

    onPullDownRefresh:function(){
        this.data.datas = []
        this.setData({datas:this.getDatas(10)})
        wx.stopPullDownRefresh()
    }
})