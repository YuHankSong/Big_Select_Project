<h1>Redircet..</h1>
<?php
/**
*   一般產生訂單(全功能)範例
*/
    
    //載入SDK(路徑可依系統規劃自行調整)
    include('./sdk/ECPay.Payment.Integration.php');
    try {
        
    	$obj = new ECPay_AllInOne();
        $pname = $_POST["itname"];
        $pprice = $_POST["itprice"];
        $pqty=$_POST["itqty"];
        $itemcount = $_POST["itcount"];
        $total = 0;
        foreach($pqty as $key=>$val){
            $total += intval($val)*intval($pprice[$key]);
        }
        var_dump($total) ;
        //服務參數
        $obj->ServiceURL  = "https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5";  //服務位置
        $obj->HashKey     = 'pwFHCqoQZGmho4w6' ;                                          //測試用Hashkey，請自行帶入ECPay提供的HashKey
        $obj->HashIV      = 'EkRm7iFT261dpevs' ;                                          //測試用HashIV，請自行帶入ECPay提供的HashIV
        $obj->MerchantID  = '3002607';                                                    //測試用MerchantID，請自行帶入ECPay提供的MerchantID
        $obj->EncryptType = '1';                                                          //CheckMacValue加密類型，請固定填入1，使用SHA256加密


        //基本參數(請依系統規劃自行調整)
        $MerchantTradeNo = "Test".time() ;
        $obj->Send['ReturnURL']         = "http://www.ecpay.com.tw/receive.php" ;     //付款完成通知回傳的網址
        $obj->Send['OrderResultURL']    = "http://localhost:8888/myapi/checkpay.php";
        $obj->Send['MerchantTradeNo']   = $MerchantTradeNo;                           //訂單編號
        $obj->Send['MerchantTradeDate'] = date('Y/m/d H:i:s');                        //交易時間
        $obj->Send['TotalAmount']       = $total;                                       //交易金額
        $obj->Send['TradeDesc']         = "good to drink" ;                           //交易描述
        $obj->Send['ChoosePayment']     = ECPay_PaymentMethod::ALL ;                  //付款方式:全功能

        //訂單的商品資料
        
        for ($i = 0; $i < $itemcount ;$i++) {
            array_push($obj->Send['Items'], array('Name' => 
            $pname[$i],'Price' => (int)$pprice[$i],
            'Currency' => "元", 'Quantity' => (int) $pqty[$i], 'URL' => "dedwed")); 
            echo $pname[$i];
            
        }
        
        // array_push($obj->Send['Items'], array('Name' => 
        // $pname,'Price' => (int)"100",
        // 'Currency' => "元", 'Quantity' => (int) "$pqty", 'URL' => "dedwed")); 
        // array_push($obj->Send['Items'], array('Name' => 
        // $pname,'Price' => (int)"200",
        // 'Currency' => "元", 'Quantity' => (int) "$pqty", 'URL' => "dedwed")); 
       
        # 電子發票參數
        /*
        $obj->Send['InvoiceMark'] = ECPay_InvoiceState::Yes;
        $obj->SendExtend['RelateNumber'] = "Test".time();
        $obj->SendExtend['CustomerEmail'] = 'test@ecpay.com.tw';
        $obj->SendExtend['CustomerPhone'] = '0911222333';
        $obj->SendExtend['TaxType'] = ECPay_TaxType::Dutiable;
        $obj->SendExtend['CustomerAddr'] = '台北市南港區三重路19-2號5樓D棟';
        $obj->SendExtend['InvoiceItems'] = array();
        // 將商品加入電子發票商品列表陣列
        foreach ($obj->Send['Items'] as $info)
        {
            array_push($obj->SendExtend['InvoiceItems'],array('Name' => $info['Name'],'Count' =>
                $info['Quantity'],'Word' => '個','Price' => $info['Price'],'TaxType' => ECPay_TaxType::Dutiable));
        }
        $obj->SendExtend['InvoiceRemark'] = '測試發票備註';
        $obj->SendExtend['DelayDay'] = '0';
        $obj->SendExtend['InvType'] = ECPay_InvType::General;
        */


        //產生訂單(auto submit至ECPay)
        $obj->CheckOut();
      
    
    } catch (Exception $e) {
    	echo $e->getMessage();
    } 


 
?>