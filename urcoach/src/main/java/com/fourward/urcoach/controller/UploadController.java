package com.fourward.urcoach.controller;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

/**
 * FileUploadController
 */

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/upload")
 public class UploadController {

    @PostMapping("")
    public String handleUpload(@RequestParam("file") MultipartFile uploadFile) throws Exception {
        String newFileName = "";
        if(uploadFile != null) {
            String filePath = "C:/Users/YONG/newdeal/project/team_Project/frontend/public/user-image";
            File fileDir = new File(filePath);
            if(fileDir.exists() == false) {
                fileDir.mkdirs();
            }

            SimpleDateFormat stampFormat = new SimpleDateFormat("yyyyMMdd-HHmmssSSSS");
            String timeStamp = stampFormat.format(new Date());
            String fileExtension = "";
            int extensionIndex = uploadFile.getOriginalFilename().lastIndexOf(".");
            if(extensionIndex != -1) {
                fileExtension = uploadFile.getOriginalFilename().substring(extensionIndex);
            }
            String uuid = UUID.randomUUID().toString().replace("-", "");
            newFileName = timeStamp + "-" + uuid + fileExtension;

            uploadFile.transferTo(new File(filePath + "/" + newFileName));
        }
        return newFileName;
    }
    
}