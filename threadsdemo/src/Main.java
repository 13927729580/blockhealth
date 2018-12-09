import GetAddress.getAddress;
import myThread.sqlthread;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.ThreadPoolExecutor;
public class Main {

    public static void main(String[] args) {
        Date start = new Date();
        ThreadPoolExecutor executor = (ThreadPoolExecutor) Executors.newCachedThreadPool();
        getAddress r=new getAddress();
        List<String> addrlist=r.split();
        List<Future<List>> result=new ArrayList<Future<List>>();
        if (addrlist.size()!=0){
            for(int i=0;i<addrlist.size();i++){
                sqlthread mysqlthread=new sqlthread(addrlist.get(i),1);
                Future<List> res=executor.submit(mysqlthread);
                result.add(res);
            }
        }
        Date finish =new Date();
        System.out.println((finish.getTime()-start.getTime())/1000);
    }




}