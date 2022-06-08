 import java.awt.Color;
 import java.awt.Font;
 import javax.swing.BorderFactory;
 import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.border.Border;
public class Main{

    public static void main(String[] args) {
        ImageIcon image = new ImageIcon("image.png"); //custom image
        Border border = BorderFactory.createLineBorder(Color.blue,3);


        JLabel label = new JLabel(); //labelnye
        label.setText("Papah-Chan"); //text label
        label.setIcon(image);
        label.setHorizontalTextPosition(Jlabel.CENTER);
        label.setVerticalTextPosition(Jlabel.TOP);
        label.setForeground(new Color(0x00FF00));
        label.setFont(new Font("MV Boli", Font.PLAIN,20));
        label.setIconTextGap(100); //set gap of text to image
        label.setBackground(Color.black);
        label.setOpaque(true);
        label.setBorder(border);
        label.setVerticalAlignment(JLabel.CENTER);
        label.setHorizontalAlignment(JLabel.CENTER);
        //label.setBounds(0, 0, 250, 250);

         Jframe frame = new Jframe(); //framenya
        frame.setDefaultCloseOperation(Jframe.EXIT_ON_CLOSE); //tombol close
         // frame.setSize(500,500);
          //frame.setLayout(null);
        frame.setResizeble(true);
        frame.add(label);
    }
}
