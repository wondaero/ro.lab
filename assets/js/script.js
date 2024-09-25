class DateFormatter{
    
    format(fomatType, d, opt){
        this.date = d;
        if(d === undefined) this.date = new Date();

        let formattedDate = fomatType;

        //월
        let month = this.date.getMonth() + 1;

        if(formattedDate.indexOf('MM') > -1){
            month = month < 10 ? ('0' + month) : month;
            formattedDate = formattedDate.replace('MM', month);
        }else if(formattedDate.indexOf('M') > -1){
            formattedDate = formattedDate.replace('M', month);
        }

        formattedDate = formattedDate.replaceAll('M', '');

        //년
        if(formattedDate.toLowerCase().indexOf('yyyy') > -1){
            formattedDate = formattedDate.toLowerCase().replace('yyyy', this.date.getFullYear());
        }else if(formattedDate.toLowerCase().indexOf('yy') > -1){
            formattedDate = formattedDate.toLowerCase().replace('yy', String(this.date.getFullYear()).slice(2, 4));
        }

        formattedDate = formattedDate.replaceAll('Y', '');
        formattedDate = formattedDate.replaceAll('y', '');

        //일
        let date = this.date.getDate();

        if(formattedDate.indexOf('dd') > -1){
            month = date < 10 ? ('0' + date) : date;
            formattedDate = formattedDate.replace('dd', date);
        }else if(formattedDate.indexOf('d') > -1){
            formattedDate = formattedDate.replace('d', date);
        }

        formattedDate = formattedDate.replaceAll('d', '');


        //시
        let h = this.date.getHours();
        if(formattedDate.indexOf('hh') > -1){
            h = h < 10 ? ('0' + h) : h;
            formattedDate = formattedDate.replace('hh', h);
        }else if(formattedDate.indexOf('h') > -1){
            formattedDate = formattedDate.replace('h', h);
        }

        formattedDate = formattedDate.replaceAll('h', '');

        //밀리세컨
        let ms = this.date.getMilliseconds();
        formattedDate = formattedDate.replace('ms', ms);
        formattedDate = formattedDate.replaceAll('ms', '');


        //분
        let m = this.date.getMinutes();
        if(formattedDate.indexOf('mm') > -1){
            m = m < 10 ? ('0' + m) : m;
            formattedDate = formattedDate.replace('mm', m);
        }else if(formattedDate.indexOf('m') > -1){
            formattedDate = formattedDate.replace('m', m);
        }

        formattedDate = formattedDate.replaceAll('m', '');

        //초
        let s = this.date.getSeconds();
        if(formattedDate.indexOf('ss') > -1){
            s = s < 10 ? ('0' + s) : s;
            formattedDate = formattedDate.replace('ss', s);
        }else if(formattedDate.indexOf('s') > -1){
            formattedDate = formattedDate.replace('s', s);
        }

        formattedDate = formattedDate.replaceAll('s', '');

        return formattedDate;

    }
}


