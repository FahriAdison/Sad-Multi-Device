class slowType{
  public static void slow(String word, int sped) {
    char[] chars = word.toCharArray();
    for (int i = 0; i < chars.length; i++) {
        System.out.print(chars[i]);
        try {
          Thread.sleep(sped);
        }
        catch (Exception e) {
            System.out.println(e);
        }
    }
  }
}
