
import cv2
from fer import FER

class GetEmotion():
    def __init__(self):
        print("in init")
        self.image = None
        self.dominant_emotion = ""
        
        self.get_face()
        
    def get_face(self):
        cam = cv2.VideoCapture(0)

        cv2.namedWindow("Selfie")

        img_counter = 0

        while img_counter < 1:
            ret, frame = cam.read()
            if not ret:
                print("failed to grab frame")
                break
            cv2.imshow("test", frame)

            k = cv2.waitKey(1)
            if k%256 == 32:
                # SPACE pressed
                #img_name = "opencv_frame_{}.png".format(img_counter)
                #cv2.imwrite(img_name, frame)
                #print("{} written!".format(img_name))
                
                self.image = frame
                
                img_counter += 1

        cam.release()

        cv2.destroyAllWindows()

    def get_emotion(self):
        if self.image is None:
            return 0
        
        emotion_detector = FER(mtcnn=True)
        dominant_emotion, emotion_score = emotion_detector.top_emotion(self.image)
        #print(dominant_emotion, emotion_score)
        
        self.dominant_emotion = dominant_emotion
        #print("returning emotion")
        return dominant_emotion
    
    
#testFace = GetEmotion()

#print(testFace.get_emotion())